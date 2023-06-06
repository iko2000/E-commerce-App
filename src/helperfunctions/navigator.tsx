function navigator(data: any, index: any) {

  
  const itemData = data[index];

  return {
    id: itemData.id,
    name: itemData.name,
    description: itemData.description,
    price: itemData.price,
    new: itemData.new,
    src: itemData.image.desktop,
    features: itemData.features,
    box1: itemData.includes[0].item,
    box2: itemData.includes[1].item,
    box3: itemData.includes[2].item,
    box4: itemData.includes[3].item,
    // box5: itemData.includes[4].item,
    quantity1: itemData.includes[0].quantity,
    quantity2: itemData.includes[1].quantity,
    quantity3: itemData.includes[2].quantity,
    quantity4: itemData.includes[3].quantity,
    // quantity5: itemData.includes[4].quantity,
    fepic1: itemData.gallery.first.desktop,
    fepic2: itemData.gallery.second.desktop,
    fepic3: itemData.gallery.third.desktop,

    picture1: itemData.others[0].image.desktop,
    picture2: itemData.others[1].image.desktop,
    picture3: itemData.others[2].image.desktop,
    featurename1: itemData.others[0].name,
    featurename2: itemData.others[1].name,
    featurename3: itemData.others[2].name,
    finder1: itemData.others[0].slug,
    finder2: itemData.others[1].slug,
    finder3: itemData.others[2].slug,

  };
}

export default navigator;
