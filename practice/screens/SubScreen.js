import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Dimensions, Image} from 'react-native';
import {ActionSheet, Root} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';

const width = Dimensions.get('window').width;
export default class SubScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: []
    }
  }

  onSelectedImage = (image) => {
    let newDataImg = this.state.fileList;
    const source = {url: image.path};
    let item = {
      id: Date.now(),
      url: source,
      content: image.data
    }
    newDataImg.push(item);
    this.setState({fileList: newDataImg})
  };

  takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 500,
      compressImageMaxHeight: 500,
      compressImageQuality: 0.7,
      cropping: false,
      includeBase64: true
    }).then(image => {
      console.log('takePhotoFromCamera: ', image);
      this.onSelectedImage(image);
    });
  };

  choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      compressImageMaxWidth: 500,
      compressImageMaxHeight: 500,
      compressImageQuality: 0.7,
      cropping: false,
      includeBase64: true
    }).then(image => {
      console.log('choosePhotoFromLibrary: ', image);
      this.onSelectedImage(image);
    });
  };

  onClickAddImage = () => {
    const BUTTONS = ['Take Photo', 'Choose Photo Library', 'Cancel'];
    ActionSheet.show(
      {options: BUTTONS, 
      cancelButtonIndex: 2, 
      title: 'Select a Photo'},
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            this.takePhotoFromCamera();
            break;
          case 1:
            this.choosePhotoFromLibrary();
            break;
          default:
            break
        }
      }
    )
  };

  renderItem = ({item, index}) => {
    let {itemViewImage, itemImage} = styles;
    return (
      <View style={itemViewImage}>
        <Image source={item.url} style={itemImage} />
      </View>
    )
  };

  render() {
    let {content, btnPressStyle, txtStyle} = styles;
    let {fileList} = this.state;
    console.log('fileList:', this.state.fileList)
    return (
      <Root>
        
        <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity 
                        style={{alignItems: "flex-end", margin: 16}} 
                        onPress={this.props.navigation.openDrawer} >
                        <Icon name="bars" size={24} color="#161924" />
                    </TouchableOpacity>

                </SafeAreaView>
            </View>
            <View style={content}>
          <Text>Sample React Native Add Image</Text>
            <FlatList
              data={fileList}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              extraData={this.state}
            />
            <TouchableOpacity onPress={this.onClickAddImage} style={btnPressStyle}>
              <Text style={txtStyle}>Press Add Image</Text>
            </TouchableOpacity>
        </View>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 30
  },
  btnPressStyle: {
    backgroundColor: '#0080ff',
    height: 50,
    width: width - 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtStyle: {
    color: '#ffffff'
  },
  itemImage: {
    backgroundColor: '#2F455C',
    height: 150,
    width: width - 60,
    borderRadius: 8,
    resizeMode: 'contain'
  },
  itemViewImage: {
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF"
    },
    text: {
    color: "#161924",
    fontSize: 20,
    fontWeight: "500"
    }
});