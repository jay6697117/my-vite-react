// export interface CustomCompProps {
//   name?: string
//   age?: number,
//   children?: React.ReactNode
// }

export type CustomCompProps = {
  name?: string
  age?: number,
  info?: { [x: string]: any }
  children?: React.ReactNode
}
