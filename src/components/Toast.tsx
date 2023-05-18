import { ToastContainer, TypeOptions } from "react-toastify";

const COMMON_STYLE = "bg-primary dark:bg-cyan-800";

const contextClass: Record<TypeOptions, string> = {
  default: COMMON_STYLE,
  info: COMMON_STYLE,
  success: COMMON_STYLE,
  warning: COMMON_STYLE,
  error: "bg-red-500 dark:bg-red-800"
};

export function Toast() {
  return (
    <ToastContainer
      position="bottom-right"
      limit={4}
      autoClose={2000}
      closeButton={false}
      hideProgressBar={true}
      icon={false}
      className="grid grid-cols-1 gap-y-3 !px-4 !pb-3 min-[480px]:!px-0 min-[480px]:!pb-0"
      toastClassName={(options) => {
        const { type } = options ?? {};

        return `flex flex-row w-full h-full shadow-lg text-gray-100 dark:text-gray-300 px-6 py-2 min-h-16 rounded ${
          contextClass[type ?? "default"]
        }`;
      }}
      bodyClassName={() =>
        "flex flex-column items-center font-semibold text-lg"
      }
    />
  );
}
