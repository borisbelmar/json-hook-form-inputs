export default function isArrayEmpty(arr: unknown[] | undefined | null) {
  return !arr?.length
}
