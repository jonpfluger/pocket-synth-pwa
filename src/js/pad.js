import test from 'node:test'
import '../css/pad.css'

export class Pad {
  xPosition = 0.5
  yPosition = 0.5
  pressed = false

  constructor() {
    this.pad = document.getElementById('pad')
    this.puck = document.getElementById('puck')
    this.setPuckStyle()

    // attach listeners
    this.pad.addEventListener('mousemove', this.handleMouseMove)
    this.pad.addEventListener('mousedown', this.handleMouseDown)
    this.pad.addEventListener('mouseup', this.handleMouseUp)
    this.pad.addEventListener('mouseleave', this.handleMouseLeave)
  }

  handleMouseMove(e) {
    if (e.buttons) {
      this.updatePuckPosition(e)
    }
  }

  handleMouseDown(e) {
    this.updatePuckPosition(e)
    this.pressed = true
  }

  handleMouseUp(e) {
    this.updatePuckPosition(e)
    this.pressed = false
  }

  handleMouseLeave(e) {
    this.pressed = false
  }

  updatePuckPosition(e) {
    this.xPosition = this.clamp(e.offsetX / this.pad.offsetWidth)
    this.yPosition = this.clamp(e.offsetY / this.pad.offsetHeight)
    this.setPuckStyle()
  }

  clamp(val) {
    return Math.min(Math.max(val, 0), 1)
  }

  setPuckStyle() {
    const leftPercent = `${(this.xPosition * 100).toFixed(2)}%`
    const topPercent = `${(this.yPosition * 100).toFixed(2)}%`
    this.puck.style.left = leftPercent
    this.puck.style.top = topPercent
  }
}