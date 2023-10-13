import type { Subdivision } from "tone/build/esm/core/type/Units";
import type { UniqueIdentifier } from "@dnd-kit/core";
import type { ITrack } from "@/types/track.types";

export enum ETransportState {
  Paused = "paused",
  Started = "started",
  Stopped = "stopped",
}

export enum EPortal {
  Instruments = "portal-instruments",
}
export interface IProjectContext {
  activeTrackId: UniqueIdentifier;
  bpm: number;
  clef: string;
  measureCount: number;
  name: string;
  position: string;
  quantization: number;
  states: Record<string, number>;
  swing: number;
  swingSubdivision: Subdivision;
  tracks: ITrack[];
}
