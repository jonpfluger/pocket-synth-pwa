import { Synth } from 'tone'

export class PocketSynth {
  synthNotes = ["C2", "E2", "G2", "A2", "C3", "D3", "E3", "G3", "A3", "B3", "C4", "D4", "E4", "G4", "A4", "B4", "C5"]

  constructor() {
    this.synth = new Synth().toDestination()
  }
}