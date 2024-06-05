import IconWrapper from "./IconWrapper";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const baseSettings = {
  color: { defaultColor: "slategrey", hoverColor: "lightslategrey" },
  size: { defaultSize: "1x", hoverScale: 1.1 },
  transition: { transDuration: 1, transEase: "ease-in-out" },
  animation: {
    name: "beat-fade",
    duration: 2,
    timing: "ease-in-out",
    cursor: "default",
    alwaysAnimated: true,
    iterations: "infinite",
    scale: "1.05",
    opacity: "0.8",
  },
};

function Icon({ icon, className, settings, transform, ...props }) {
  return (
    <IconWrapper
      icon={icon ?? faSpinner}
      className={className}
      settings={
        settings ? { ...baseSettings, ...settings } : { ...baseSettings }
      }
      transform={{ ...transform }}
      {...props}
    />
  );
}

export default Icon;