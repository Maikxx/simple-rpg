enum TileType {
    OBSTACLE = 'X',
    PLAYER = 'P',
    ROAMING = 'R'
}

export class World {
    constructor(
        private readonly worldMap: string[][],
        private readonly tileSize: number,
        private readonly context: CanvasRenderingContext2D
    ) {}

    public render(): void {
        this.worldMap.forEach((y, indexY) => {
            y.forEach((x, indexX) => {
                this.context.fillStyle = this.getTileColor(x as TileType);
                this.context.fillRect(indexX * this.tileSize, indexY * this.tileSize, this.tileSize, this.tileSize);
            });
        })        
    }

    private getTileColor(tileType: TileType): string {
        if (tileType === TileType.OBSTACLE) return '#5a6882'
        else if (tileType === TileType.ROAMING) return '#a1df50'
        else throw new Error(`This tile type (${tileType}) is not (yet) supported.`)
    }
}
