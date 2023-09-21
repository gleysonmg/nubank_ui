import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import logo from '../../assets/logo.png'
import setting from '../../assets/setting.png'
import mastercard from '../../assets/mastercard.png'
import wallet from '../../assets/Wallet.png'
import pix from '../../assets/pix.png'
import boleto from '../../assets/boleto.png'
import dinheiro from '../../assets/dinheiro.png'

export function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.header}>
                <Image source={logo}/>
                <Image source={setting}/>
            </View>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View />
                    <Image source={mastercard}/>
                </View>
                <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>Gleyson S. Ribeiro</Text>
                    <View />
                </View>
            </View>
            <View style={styles.cardDetails}>
                <View style={styles.cardDetailsHeader}>
                    <Text style={styles.cardDetailsHeaderText}>Saldo disponível</Text>
                    <Image source={wallet}></Image>
                </View>
                <Text style={styles.cardDetailsTextValue}>R$ 145,76</Text>
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                Do que precisa?
            </Text>
            <ScrollView
                style={styles.footerScrollCardContainer}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                <View style={styles.footerCard}>
                    <Image source={pix} style={styles.footerCardImage}/>
                    <Text style={styles.footerCardText}>Fazer um pix</Text>
                </View>
                <View style={styles.footerCard}>
                    <Image source={boleto}/>
                    <Text style={styles.footerCardText}>Pagamentos</Text>
                </View>
                <View style={styles.footerCard}>
                    <Image source={dinheiro}/>
                    <Text style={styles.footerCardText}>Fazer depósito</Text>
                </View>
            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#820AD1',
    //alignItems: 'center',
    paddingHorizontal: 5,
  },
  content: {
    width: "100%",
    paddingHorizontal: 30,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
},
card: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#9500F6",
    justifyContent: "space-between",
    padding: 20,
},
cardHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
},
cardFooter: {
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
},
cardFooterText: {
  fontSize: 24,
  color: "#FFF",
  fontWeight: "600",
  lineHeight: 36,
},
cardDetails: {
    padding: 20,
    marginTop: 20,
    width: "100%",
    height: 120,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#9500F6",
},
  cardDetailsHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardDetailsHeaderText: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },
  cardDetailsTextValue: {
    color: "#fff",
    fontSize: 28,
    lineHeight: 54,
    fontWeight: "600",
  },
  footer: {
    paddingTop: 30,
    width: "100%",
  },
  footerText: {
    marginLeft: 30,
    color: "#fff",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },
  footerScrollCardContainer: {
    width: "100%",
    height: 300,
    paddingHorizontal: 19,
  },
  footerCard: {
    marginTop: 15,
    marginLeft: 8,
    width: 100,
    height: 127,
    elevation: 5,
    borderRadius: 27,
    backgroundColor: "#9500F6",
    justifyContent: "space-between",
    padding: 15,
  },
  footerCardText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  footerCardImage: {
    
  },
});
