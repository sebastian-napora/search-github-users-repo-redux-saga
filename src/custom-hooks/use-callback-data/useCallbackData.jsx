import { useCallback } from 'react'
import { useDispatch } from 'react-redux';


export const useCallbackData = (memorizedFunction, args) => {
  const dispatch = useDispatch()

  const callback = useCallback(() => {
    args !== '' && dispatch(memorizedFunction(args))
  }, [args])

  return { callback }
}