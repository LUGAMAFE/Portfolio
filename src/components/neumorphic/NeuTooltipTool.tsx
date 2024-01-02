import { FloatingArrow, useDismiss, useInteractions } from '@floating-ui/react';
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { calculateDisplayStyle, getContrast, useFloatingLogic } from '../../utils';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';
import Configuration from './Configuration';
import { NeuElementContext } from './context/NeuElementContext';

const ARROW_HEIGHT = 10;
const ARROW_WIDTH = 16;

interface NeuTooltipProps {
  refElement: HTMLElement | null;
  setRefProps: Dispatch<SetStateAction<object>>;
  onClick?: (e: React.MouseEvent) => void;
}
const eventClose = new CustomEvent('closeNeu', {
  bubbles: true,
});

const NeuTooltipTool = ({ refElement, setRefProps, onClick }: NeuTooltipProps) => {
  const {
    ctrlButton,
    styles: { mainColor },
  } = useContext(NeumorphicStylesContext);
  const {
    contextConfig: { color },
  } = useContext(NeuElementContext);
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { x, y, strategy, refs, context } = useFloatingLogic({ isOpen, setIsOpen, arrowRef });

  const { getReferenceProps, getFloatingProps } = useInteractions([useDismiss(context)]);

  const closeTooltip = useCallback((e: MouseEvent) => {
    if (e.target !== e.currentTarget) {
      setIsOpen(false);
    }
  }, []);

  const display = useMemo(() => calculateDisplayStyle(refElement), [refElement]);

  useEffect(() => {
    if (refElement === null) return;
    refElement.addEventListener('click', closeTooltip);
    return () => refElement.removeEventListener('click', closeTooltip);
  }, [refElement, closeTooltip]);

  useEffect(() => {
    setRefProps({
      ...getReferenceProps({
        onClick(e) {
          const closest = (e.target as Element).closest('.neuElement');
          if (closest == e.currentTarget) {
            setIsOpen((prev) => {
              if (!ctrlButton) {
                return !prev;
              }
              if (e.ctrlKey) {
                return !prev;
              }
              return false;
            });
            e.currentTarget.dispatchEvent(eventClose);
          }
          if (onClick) onClick(e);
        },
      }),
    });
  }, [getReferenceProps, setRefProps]);

  useLayoutEffect(() => {
    refs.setReference(refElement);
  }, [refs, refElement]);

  return (
    <>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: 'max-content',
            ...display,
          }}
          {...getFloatingProps({
            onClick(e) {
              e.stopPropagation();
            },
          })}
        >
          <FloatingArrow
            ref={arrowRef}
            context={context}
            width={ARROW_WIDTH}
            height={ARROW_HEIGHT}
            fill={getContrast(color || mainColor)}
            tipRadius={2}
          />
          <Configuration />
        </div>
      )}
    </>
  );
};

export default NeuTooltipTool;
