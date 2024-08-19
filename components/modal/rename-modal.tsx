"use client";

import { useRenameModal } from "@/store/use-rename-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const RenameModal = () => {
  const { isOpen, onClose, initialValues } = useRenameModal();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit board title</DialogTitle>
          <DialogDescription>
            Enter a new title for this board.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RenameModal;
