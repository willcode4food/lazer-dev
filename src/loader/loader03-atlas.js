import Loader from 'lazer/loader/Loader';

let loader = new Loader();

loader.path = 'assets/';

loader.atlas('invaderpig');

loader.start().then(
    (files) => loaderComplete(files)
);

function loaderComplete (files) {

    for (let file of files)
    {
        console.log(file);
    }

}