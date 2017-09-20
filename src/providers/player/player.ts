import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
    playerParams: {
        isInit: false,
        isPlaying: false,
        datasPlayer: {}
    }

    setPlayer(initialized, playing, datas) {
        this.playerParams.isInit      = initialized;
        this.playerParams.isPlaying   = playing;
        this.playerParams.datasPlayer = datas;

        //console.log('initialized', initialized, '  playing', playing, '  datas', datas);

        if(this.playerParams.isInit) {
            
        }
        
    }

    getPlayer() {
        return this.playerParams;
    }
}