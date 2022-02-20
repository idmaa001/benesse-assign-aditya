import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an custom made version of the maths expression guessing game we all know and
        love for Benesse Interview Assessment - {' '}
        <a
          href="https://github.com/idmaa001/benesse-assign-aditya.git"
          className="underline font-bold"
        >
            check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
