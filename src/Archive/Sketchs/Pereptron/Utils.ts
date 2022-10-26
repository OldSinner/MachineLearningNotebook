export const MIN_VALUE = -1
export const MAX_VALUE = 1
export function MapToCanvas(x: number, y: number): number[] {
  var px = map(x, MIN_VALUE, MAX_VALUE, 0, width)
  var py = map(y, MIN_VALUE, MAX_VALUE, height, 0)
  return [px, py]
}
export function MapToCaresian(x: number, y: number): number[] {
  var px = map(x, 0, width, MIN_VALUE, MAX_VALUE)
  var py = map(y, 0, height, MAX_VALUE, MIN_VALUE)
  return [px, py]
}
