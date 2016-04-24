import Loader from 'lazer/loader/Loader';
import TexturePackerJSONArray from 'lazer/texture/parsers/TexturePackerJSONArray';

let loader = new Loader();

loader.path = 'assets/';

loader.atlas('invaderpig').then(
    (multipart) => atlasLoaded(multipart)
);

loader.start();

function atlasLoaded (multipart) {

    let texture = multipart.fileA.data;
    let json = multipart.fileB.data;

    let frames = TexturePackerJSONArray(texture, json);

    console.log(frames);

}