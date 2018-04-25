import React, {Component} from 'react'
import Uploader from 'uploader-window'

//console.log(Uploader);

const uploader = Uploader({
  apiKey: 'ed3d2c21991e3bef'
});


uploader({
  sources: [ 'upload', 'paste', 'facebook', 'dropbox', 'youtube', 'instagram', 'camera', 'gdrive', 'search', 'mic' ],
  minFiles: '2'
})
  .then(function (urls) {
    console.log("urls: ", urls);
  });

export default class extends Component {
  render() {
    return(
      <div>
      </div>
    )
  }
}


