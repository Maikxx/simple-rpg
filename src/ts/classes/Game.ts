import { startingArea } from '../../data/startingArea';
import { World } from './World';

export class Game {
    private readonly CANVAS_WIDTH_16_9 = 1920;
    private readonly CANVAS_HEIGHT_16_9 = 1080;

    private readonly canvas: HTMLCanvasElement;
    private readonly context: CanvasRenderingContext2D;
    private readonly tileSize = 64;
    private currentWorld: World;

    constructor() {
        const canvas = document.querySelector('#game-root');

        if (!(canvas instanceof HTMLCanvasElement)) {
            throw new Error('The game could not start. The game root element could not be found.')
        }

        const canvasContext2d = canvas.getContext('2d');

        if (!(canvasContext2d instanceof CanvasRenderingContext2D)) {
            throw new Error('The game could not start. The context of the canvas was not set correctly.')
        }

        this.canvas = canvas;
        this.context = canvasContext2d;
        this.currentWorld = new World(
            startingArea,
            this.tileSize,
            this.context
        );
    }

    public start(): void {        
        this.canvas.width = this.CANVAS_WIDTH_16_9;
        this.canvas.height = this.CANVAS_HEIGHT_16_9;

        this.currentWorld.render();
    }
}