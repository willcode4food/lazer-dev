import Transform2D from 'lazer/components/Transform2D';

let peter = new Transform2D();
let paul = new Transform2D();
let mary = new Transform2D();

peter.name = 'peter';
paul.name = 'paul';
mary.name = 'mary';

peter.setParent(paul);
peter.setParent(mary);

for (var child of peter)
{
    console.log(child.name);
}

