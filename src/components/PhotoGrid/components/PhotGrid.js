import React, { Component }from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e35/923995_1704188643150533_1383710275_n.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12407480_1654828594805097_152207166_n.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/11875511_1562439187344831_813588280_n.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e35/12501993_1504179163220771_2060674913_n.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/1516572_445736812276082_2116173059_n.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e35/10723795_1149927178351091_1859033096_n.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/12277581_1028556737218368_1184190781_n.jpg",
    title: "Totally need to try this.",
    author: "heavymetaladam"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12224456_175248682823294_1558707223_n.jpg",
    title: "Wes. WE should have lunch.",
    author: "jdaveknox"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/11326072_550275398458202_1726754023_n.jpg",
    title: "#adults",
    author: "jdaveknox"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12346073_1035047523184672_768982339_n.jpg",
    title: "@jdaveknox yes!",
    author: "wesbos"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12331739_1671776806423597_995664526_n.jpg",
    title: "😍 love Hamilton!",
    author: "willowtreemegs"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12354078_447337935474115_1484398925_n.jpg",
    title: "Those are cute! They're like silver dollar pancakes.",
    author: "rrsimonsen"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12362588_1688046211438811_1395882545_n.jpg",
    title: "I like baby pancakes but gluten free please!! I'll bring the coffee!! See you in 6 days!!!!!! 😝😛😝♥️",
    author: "terzisn"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12301208_1533749386944985_1334730917_n.jpg",
    title: "... and apparently growing baby. 👀. Yum.",
    author: "henrihelvetica"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12357319_493317964181479_310198908_n.jpg",
    title: "@wesbos 👍 my daughter is a pancake eating machine!",
    author: "brentoage"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12317458_1692845870986430_331905833_n.jpg",
    title: "Nice stove!",
    author: "haaps"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12276809_750065668431999_184252508_n.jpg",
    title: "Genius bottle use! Do you make a single batch of batter or make a lot and freeze it?",
    author: "gobananna"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12331333_1650987978502155_1162510634_n.jpg",
    title: "@gobananna I just made a batch and put in in a FIFO bottle. Keeps in the fridge for a few days.",
    author: "wesbos"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12298962_863814057068027_460827278_n.jpg",
    title: "@haaps thanks! It's a Jenn air - so nice to cool with!",
    author: "wesbos"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12328347_990748230999662_1512917342_n.jpg",
    title: "Where would you go and for how long, if you had location freedom? - Greg 🌎",
    author: "world_greg"
  },
];


class PhotoGrid extends React.Component {
  /*render() {
    return (
      <div style={styles.root}>
        <Subheader>Photo List</Subheader>
        <GridList
          cellHeight={200}
          style={styles.gridList}
          >

          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
              <img src={tile.img} />
            </GridTile>
          )) }
        </GridList>
      </div>
    )
  }*/
componentWillMount() {
    this.props.fetchPhotos();
  }

  renderPhoto({title, author, img}) {
    return (
      <GridTile
        key={img}
        title={title}
        subtitle={<span>by <b>{author}</b></span>}
        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
        <img src={img} />
      </GridTile>
    )
  }

  render() {
    return (
      <div style={styles.root}>
        <Subheader>Photo List</Subheader>
        <GridList
          cellHeight={200}
          style={styles.gridList}
          >

          {photos.map(this.renderPhoto) }
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  };
};


export default connect(mapStateToProps, actions)(PhotoGrid)