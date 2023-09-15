import type {
  IAudioTrack,
  IGroupTrack,
  IMidiTrack,
  ITimeTrack,
} from "@/app/core/tracks";
import type { IMixer } from "@/app/components";

type TTrack = IAudioTrack | IGroupTrack | IMidiTrack | ITimeTrack;

interface IProjectSettings {
  bpm: number;
  clef: string;
  measureCount: number;
  mixer: IMixer;
  name: string;
  position: string;
  quantization: number;
  tracks: TTrack[];
}

export type { IProjectSettings };
export type { TTrack };
