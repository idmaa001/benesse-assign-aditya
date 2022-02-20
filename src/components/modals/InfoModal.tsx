import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the maths expression in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the expression.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="1" status="correct" />
        <Cell value="2" />
        <Cell value="+" status="correct" />
        <Cell value="3" />
        <Cell value="8" />
        <Cell value="=" />
        <Cell value="5" />
        <Cell value="0" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 1 and '+' is in the expression and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="2" />
        <Cell value="1" />
        <Cell value="+" />
        <Cell value="4" status="present" />
        <Cell value="7" />
        <Cell value="=" />
        <Cell value="6" />
        <Cell value="8" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 4 is in the expression but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="2" />
        <Cell value="2" />
        <Cell value="+" />
        <Cell value="4"  />
        <Cell value="7" />
        <Cell value="=" />
        <Cell value="6" status="absent"/>
        <Cell value="9" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter 6 is not in the expression in any spot.
      </p>
    </BaseModal>
  )
}
