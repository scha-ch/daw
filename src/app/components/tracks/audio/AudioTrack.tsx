import { ActivityIcon } from "lucide-react";
import cn from "classnames";

import Accordion from "@/app/components/ui/accordion/Accordion";

import { styles } from "@/app/components/tracks/styles";
import { ETrackType } from "@/app/components/tracks/types";
import type { IAudioTrackConfig } from "@/app/components/tracks/audio/types";

export default function AudioTrack({ name }: IAudioTrackConfig) {
  const Template = () => (
    <div className={cn(styles.track.row(ETrackType.Audio), "bg-purple-300")}>
      <div className={styles.track.column1(ETrackType.Audio)}>
        <ActivityIcon className={styles.track.icon(ETrackType.Audio)} />
        <div className="whitespace-nowrap w-28 overflow-x-hidden text-ellipsis">
          {name}
        </div>
      </div>
      <div className="p-1 flex w-full">&nbsp;</div>
    </div>
  );

  return <Accordion summary={<Template />} open></Accordion>;
}