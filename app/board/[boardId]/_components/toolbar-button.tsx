"use client";

import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ToolbarButtonProps {
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
}

const ToolbarButton = ({
  label,
  icon: Icon,
  isActive,
  isDisabled,
  onClick,
}: ToolbarButtonProps) => {
  return (
    <Hint label={label} side="right" sideOffset={14}>
      <Button
        disabled={isDisabled}
        onClick={onClick}
        size="icon"
        variant={isActive ? "boardActive" : "board"}
      >
        <Icon />
      </Button>
    </Hint>
  );
};

export default ToolbarButton;
