import React from 'react';
import { camera, trash, close } from 'ionicons/icons';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonGrid,
  IonFab,
  IonFabButton,
  IonRow,
  IonImg,
  IonCard,
  IonCol,
  IonIcon, } from '@ionic/react';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="4" key={index}>
                <IonCard id="img-card">
                <IonImg src={photo.base64 ?? photo.webviewPath} id="photo-img"/>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        {/* <ExploreContainer name="Tab 2 page" /> */}
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
