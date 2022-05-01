import { useSpring, UseSpringProps } from '@react-spring/web';

const useParameter = (props: UseSpringProps) => {
  const { t } = useSpring<{ t: number }>({
    ...props,
    from: { t: 0 },
    to: { t: 1 },
  });

  return t;
};

export default useParameter;
