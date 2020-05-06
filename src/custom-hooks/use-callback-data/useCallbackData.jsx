import { useCallback } from 'react'
import { useDispatch } from 'react-redux';


export const useCallbackData = (memorizedFunction, renderArgument) => {
  const dispatch = useDispatch()

  const callback = useCallback(() => {
    renderArgument !== '' && dispatch(memorizedFunction(renderArgument))
  }, [renderArgument])

  return { callback }
}