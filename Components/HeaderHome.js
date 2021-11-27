import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import Svg, { Path } from "react-native-svg"
import { FontAwesome5 } from '@expo/vector-icons';


export default function HeaderHome() {

    const user = useSelector(state => state.user)

    return (
        <View style={styles.container}>
            <Svg
                width={104}
                height={30}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.35.103C3.223 1.011.88 3.568.143 6.781c-.934 4.068 2.959 5.79 3.282 5.228.368-.665-.702-.892-.924-3.001-.288-2.728.964-5.775 2.534-7.11.293-.248.278.098.278.737 0 1.145-.06 11.41-.06 13.55 0 2.898-.117 3.816-.329 4.718-.217.918-.56 1.537-.298 1.774.293.268 1.54-.366 2.257-1.392.863-1.227 1.166-2.702 1.221-4.3.066-1.934.061-4.992.066-6.74 0-1.603.025-6.29-.025-9.11C8.126.449 6.243-.273 5.349.103zm98.172 15.226c-.308 0-.449.325-.565.867-.404 1.892-.828 2.32-1.378 2.32-.611 0-1.161-.938-1.303-2.815-.111-1.475-.096-4.192.046-6.894.03-.557-.121-1.103-1.585-1.645-.631-.232-1.55-.577-2.004.547-1.288 3.16-1.793 5.671-1.914 6.692-.005.052-.07.062-.08-.056-.076-.82-.243-2.305-.268-5.425-.005-.608-.131-1.129-.793-1.552-.429-.273-1.731-.763-2.2-.18-.405.474-.88 1.748-1.369 3.259-.399 1.227-.671 2.057-.671 2.057s.005-3.316.01-4.568c0-.475-.318-.63-.414-.66-.434-.13-1.292-.34-1.656-.34-.45 0-.555.252-.555.623 0 .047-.07 4.362-.07 7.379v.428c-.248 1.387-1.05 3.268-1.924 3.268-.879 0-1.288-.783-1.288-4.382 0-2.099.061-3.011.091-4.527.015-.872.05-1.547.05-1.697-.004-.469-.802-.7-1.17-.789-.374-.087-.697-.123-.95-.108-.358.02-.61.258-.61.588v.51c-.46-.732-1.197-1.242-1.692-1.392-1.322-.397-2.705-.046-3.75 1.439-.828 1.175-1.328 2.51-1.525 4.429-.146 1.402-.096 2.825.157 4.027-.308 1.356-.884 1.913-1.51 1.913-.909 0-1.57-1.51-1.494-4.125.05-1.717.389-2.924.757-4.672.157-.742.03-1.134-.293-1.505-.293-.34-.924-.516-1.827-.304-.641.154-1.565.32-2.403.443 0 0 .05-.206.09-.567.218-1.903-1.817-1.748-2.468-1.14-.389.366-.651.794-.752 1.563-.157 1.222.823 1.8.823 1.8-.323 1.495-1.11 3.449-1.924 4.861-.434.758-.772 1.32-1.201 1.913 0-.221 0-.443-.005-.665-.01-3.145.03-5.62.05-6.512.016-.871.05-1.526.05-1.68-.004-.341-.201-.47-.61-.635a4.325 4.325 0 00-1.232-.279c-.555-.046-.893.258-.883.614v.48c-.46-.733-1.197-1.243-1.691-1.393-1.323-.397-2.706-.046-3.751 1.439-.828 1.176-1.368 2.83-1.525 4.414-.141 1.474-.116 2.727.081 3.784-.212 1.057-.818 2.166-1.5 2.166-.873 0-1.373-.784-1.373-4.383 0-2.098.061-3.011.091-4.527.02-.871.05-1.547.05-1.696-.004-.47-.802-.702-1.17-.79-.389-.092-.722-.123-.98-.102-.338.025-.575.335-.575.562v.53c-.46-.731-1.202-1.242-1.691-1.391-1.323-.397-2.696-.036-3.746 1.438-.687.964-1.242 2.032-1.525 4.393-.086.68-.12 1.32-.116 1.918-.272 1.702-1.479 3.656-2.463 3.656-.576 0-1.126-1.14-1.126-3.563 0-3.233.197-7.832.232-8.276l1.49-.025c.62-.005 1.186.01 2.014-.036.413-.021.812-1.537.388-1.723-.197-.087-1.57-.16-2.115-.17-.434-.025-1.711-.123-1.711-.123s.116-3.053.141-3.378c.02-.268-.323-.407-.515-.49-.48-.206-.903-.304-1.408-.407-.702-.15-1.015-.005-1.08.598-.096.908-.142 3.579-.142 3.579-.515 0-2.267-.104-2.777-.104-.48 0-.989 2.084-.333 2.11.757.03 2.08.056 2.959.082 0 0-.04 4.676-.04 6.12v.444c-.48 2.557-2.182 3.934-2.182 3.934.364-1.691-.378-2.96-1.721-4.032a127.622 127.622 0 00-2.565-1.97s.631-.634 1.197-1.908c.399-.902.414-1.938-.56-2.165-1.61-.377-2.944.825-3.337 2.114-.308.995-.142 1.732.459 2.5.04.057.09.114.141.17a60.398 60.398 0 01-1.287 2.419c-1.176 2.067-2.065 3.702-2.736 3.702-.535 0-.53-1.66-.53-3.212 0-1.341.096-3.352.177-5.44.025-.691-.314-1.083-.884-1.439-.343-.216-1.08-.644-1.51-.644-.64 0-2.483.087-4.225 5.213-.217.644-.651 1.825-.651 1.825l.035-6.162c0-.144-.075-.283-.247-.381-.293-.165-1.08-.495-1.777-.495-.333 0-.5.16-.5.474l-.06 9.642c0 .732.02 1.588.09 1.96.071.37.187.68.329.86.141.181.308.32.575.377.252.052 1.636.232 1.706-.304.086-.645.091-1.34.818-3.934 1.131-4.043 2.605-6.012 3.297-6.714.12-.123.262-.129.252.072-.03.887-.131 3.104-.202 4.981-.186 5.033.712 5.966 2 5.966.984 0 2.372-.995 3.861-3.511.93-1.568 1.828-3.11 2.479-4.218.45.423.96.882 1.464 1.366 1.176 1.135 1.56 2.212 1.307 3.233-.196.784-.933 1.588-2.246.804-.384-.226-.545-.402-.929-.665-.207-.139-.525-.18-.712-.03-.49.376-.772.855-.934 1.448-.156.578.414.882 1 1.15.51.232 1.6.438 2.297.464 2.71.093 4.882-1.33 6.396-5.001.273 3.17 1.424 4.965 3.423 4.965 1.337 0 2.68-1.758 3.266-3.485.166.706.419 1.32.737 1.835 1.545 2.485 4.533 1.95 6.038-.16.464-.65.535-.887.535-.887.217 1.99 1.797 2.687 2.7 2.687 1.01 0 2.055-.485 2.787-2.16.086.18.182.355.283.52 1.54 2.485 4.533 1.95 6.033-.16.07-.098.13-.185.186-.268l.046 1.31-1.383 1.289c-2.318 2.16-4.08 3.8-4.21 5.708-.167 2.433 1.776 3.336 3.245 3.454 1.56.124 2.898-.747 3.716-1.974.722-1.078 1.196-3.404 1.161-5.693l-.056-3.336a26.78 26.78 0 002.575-3.594c.919-1.552 1.908-3.63 2.413-5.249 0 0 .858.006 1.772-.051.293-.016.374.041.323.258-.065.263-1.156 4.537-.161 7.383.681 1.95 2.216 2.578 3.124 2.578 1.066 0 2.085-.814 2.63-2.031.066.134.137.263.213.386 1.54 2.486 4.523 1.944 6.037-.16.344-.474.535-.886.535-.886.324 2.062 1.904 2.696 2.807 2.696.94 0 1.833-.392 2.56-2.134.03.768.08 1.397.151 1.593.046.119.313.273.51.345.863.325 1.737.17 2.065.104.227-.047.399-.232.424-.702.06-1.242.025-3.336.394-4.888.62-2.609 1.201-3.62 1.479-4.12.151-.278.328-.324.333-.03.015.603.045 2.361.283 4.733.176 1.743.414 2.774.595 3.099.52.933 1.162.974 1.681.974.334 0 1.025-.093.965-.685-.03-.29.025-2.073.636-4.646.404-1.676 1.07-3.192 1.312-3.743.091-.207.132-.042.132-.01-.05 1.154-.167 4.928.297 6.996.626 2.8 2.444 3.11 3.075 3.11 1.348 0 2.453-1.042 2.827-3.79.07-.676-.061-1.192-.46-1.192zm-56.555-1.696c-.076 1.454-.359 2.67-.803 3.553-.813 1.598-2.413 2.103-3.12-.207-.51-1.665-.338-3.934-.126-5.16.313-1.821 1.1-3.11 2.332-2.986 1.267.129 1.878 1.779 1.717 4.8zm12.343.02c-.07 1.372-.424 2.754-.803 3.533-.787 1.608-2.438 2.114-3.12-.207-.464-1.582-.353-3.63-.126-4.919.298-1.675 1.025-3.227 2.332-3.227 1.273 0 1.899 1.418 1.717 4.82zm.323 9.37c-.015 2.505-.404 4.697-1.237 5.336-1.181.902-2.766.227-2.438-1.598.293-1.62 1.66-3.27 3.675-5.285.005-.006.005.453 0 1.546zm21.303-9.354c-.07 1.506-.398 2.686-.802 3.517-.788 1.608-2.428 2.108-3.12-.207-.379-1.258-.394-3.367-.121-5.125.278-1.789 1.05-3.145 2.332-3.021 1.257.123 1.848 1.779 1.712 4.836z"
                    fill="#000"
                />
            </Svg>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name="add-box" size={24} color="black" />
                <Ionicons name="heart" size={24} color="black" style={{marginLeft:12}} />     
                <FontAwesome5 name="facebook-messenger" size={22} color="black" style={{marginLeft:12}} />           
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    }
});
