"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const create = useMutation(api.board.create);
  const { mutate, pending } = useApiMutation(api.board.create);
  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
      })
      .catch((err) => {
        toast.error("Failed to create board");
      });
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-teal-400 hover:bg-teal-600 rounded-lg flex flex-col items-center justify-center py-6",
        (pending || disabled) && "opacity-75 cursor-not-allowed"
      )}
    >
      <div />

      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New board</p>
    </button>
  );
};

export default NewBoardButton;
