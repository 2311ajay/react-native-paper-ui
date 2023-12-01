import { StyleSheet, View } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { Badge, IconButton, List, Paragraph, Switch, useTheme } from 'react-native-paper';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export const NotificationTab = (props: {
    route: RouteProp<ParamListBase, "Notifications">;
    navigation: any;
    switchHook: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    }
) => {

    const [visible, setVisible] = props.switchHook;
    const {
    colors: { background },
    } = useTheme();


    return (
    <View style={[styles.container, { backgroundColor: background }]}>
        <View style={[styles.row, styles.item]}>
        <Paragraph style={styles.label}>Show badges</Paragraph>
        <Switch
            value={visible}
            onValueChange={(visible) => setVisible(visible)}
        />
        </View>
        <List.Section title="Text">
            <View style={styles.row}>
            <View style={styles.item}>
            <IconButton icon="palette-swatch" size={36} style={styles.button} />
            <Badge visible={visible} style={styles.badge}>
                12
            </Badge>
            </View>
                <View style={styles.item}>
                    <IconButton icon="inbox" size={36} style={styles.button} />
                    <Badge
                        visible={visible}
                        style={[styles.badge, { backgroundColor: Colors.blue500 }]}
                        >
                        999+
                    </Badge>
                </View>
            </View>
        </List.Section>
        <List.Section title="Dot">
            <View style={styles.row}>
                <View style={styles.item}>
                    <IconButton icon="book-open" size={36} style={styles.button} />
                    <Badge visible={visible} style={styles.badge} size={8} />
                </View>
                <View style={styles.item}>
                <IconButton icon="receipt" size={36} style={styles.button} />
                <Badge visible={visible} style={styles.badge} size={8} />
                </View>
            </View>
        </List.Section>
    </View>
);
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    },
    item: {
    margin: 16,
    },
    button: {
    opacity: 0.6,
    },
    badge: {
    position: 'absolute',
    top: 4,
    right: 0,
    },
    label: {
    flex: 1,
    },
    });