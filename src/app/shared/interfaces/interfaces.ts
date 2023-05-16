export interface Answer {
  question?: string
  answer?: string
  checkboxes?: string[]
  other?: boolean
  otherText?: string
}
export interface Question {
  type: string
  questionText: string
  options?: string[]
}
export interface Option {
  text: string
  value: string
}
