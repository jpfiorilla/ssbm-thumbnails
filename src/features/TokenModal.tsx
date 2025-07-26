import React, { FormEventHandler, useState } from "react";
import { useToken } from "../context/TokenContext";
import Modal from "@/components/update/Modal";
import { validateToken } from "@/api/startgg";

const TokenModal: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const { setToken } = useToken();
  const [inputToken, setInputToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOk: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const trimmedInput = inputToken.trim();
    setIsSubmitting(true);

    if (trimmedInput) {
      const isValid = await validateToken(trimmedInput);
      console.log({ isValid });

      if (isValid) {
        setToken(trimmedInput);
        onClose();
      }
    }

    setIsSubmitting(false);
  };

  return (
    <Modal
      open={open}
      title="Enter Start.gg API Token"
      cancelText="Cancel"
      okText="Save"
      onCancel={onClose}
      //   onOk={handleOk}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <form style={{ display: "flex", gap: "12px" }} onSubmit={handleOk}>
          <input
            type="password"
            placeholder="Paste your API token"
            value={inputToken}
            onChange={(e) => setInputToken(e.target.value)}
            style={{
              padding: "8px",
              flexGrow: 1,
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </form>
        <small>
          Find your token at{" "}
          <a href="https://developer.start.gg" target="_blank" rel="noreferrer">
            developer.start.gg
          </a>
        </small>
      </div>
    </Modal>
  );
};

export default TokenModal;
