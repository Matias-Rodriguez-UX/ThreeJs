import {
    grassImg,
    dirtImg,
    logImg,
    glassImg,
    woodImg,
    stoneImg,
    bricksImg
} from "./images";
import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const groundTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const stoneTexture = new TextureLoader().load(stoneImg)
const bricksTexture = new TextureLoader().load(bricksImg)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
stoneTexture.magFilter = NearestFilter
bricksTexture.magFilter = NearestFilter

export { groundTexture, dirtTexture, logTexture, glassTexture, woodTexture, stoneTexture, bricksTexture }
