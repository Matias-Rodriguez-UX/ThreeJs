import {
    grassImg,
    dirtImg,
    nowImg,
    glassImg,
    woodImg,
    stoneImg,
    bricksImg
} from "./images";
import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const groundTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const nowTexture = new TextureLoader().load(nowImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const stoneTexture = new TextureLoader().load(stoneImg)
const bricksTexture = new TextureLoader().load(bricksImg)
const grassTexture = new TextureLoader().load(grassImg)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
nowTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
stoneTexture.magFilter = NearestFilter
bricksTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter

export { groundTexture, dirtTexture, nowTexture, glassTexture, woodTexture, stoneTexture, bricksTexture, grassTexture }
