import type { ExtractPropTypes } from "vue";

const MESSAGE_TYPE_ENUM = ["default", "info", "primary", "warning", "error"];

export const Props = {
  // 消息类型
  type: {
    type: String,
    default: "default",
    validator(value: string) {
      return MESSAGE_TYPE_ENUM.includes(value);
    },
  },
  // 文字消息内容
  message: {
    type: String,
    default: "",
  },
  // 消息图标
  icon: {
    type: String,
    default: "",
  },
  // 是否显示关闭按钮
  showClose: {
    type: Boolean,
    default: true,
  },
  // 持续时间 （自动关闭）
  duration: {
    type: String || Number,
    default: 3000,
  },
};

export type IconProps = ExtractPropTypes<typeof Props>;
