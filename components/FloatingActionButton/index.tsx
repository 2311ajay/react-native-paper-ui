import { Props } from "./props";
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { FC } from "react";

export const FloatingActionButton: FC<Props> = (props) => {
    const {...FABProps} = props;
    return (            
        <FAB
            style={styles.fab}
            onPress={() => console.log('Pressed')}
            {...FABProps}
        />
)};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default FloatingActionButton;
// export type FloatingActionButtonProps = Props;

