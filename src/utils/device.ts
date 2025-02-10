const DeviceMap = {
  phone: {
    columnSpans: 6, // 6 / 3 = 2
  },
  tablet: {
    columnSpans: 4, // 9 / 3 = 3
  },
  desktop: {
    columnSpans: 3, // 12 / 3 = 4
  },
} as const;

type T_DeviceType = keyof typeof DeviceMap;

const getDevice = (width): T_DeviceType => {
  const isPhone =
    typeof navigator !== 'undefined' &&
    navigator &&
    navigator.userAgent.match(/phone/gi);

  if (width < 680 || isPhone) {
    return 'phone';
  } else if (width < 1280 && width > 680) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

export const queryDevice = () => {
  return getDevice(document.body.clientWidth);
};

export const queryColumnSpans = () => {
  const device = getDevice(document.body.clientWidth);
  return DeviceMap[device].columnSpans;
};
