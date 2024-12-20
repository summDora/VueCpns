import type { ExtractPropTypes } from "vue";

const ROW_JUSTIFY_ENUM = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly",
];

const ROW_ALIGN_ENUM = ["top", "middle", "bottom"];

export const Props = {
  // 栅格间隔
  span: {
    type: Number,
    default: 0,
  }
};

export type IconProps = ExtractPropTypes<typeof Props>;
