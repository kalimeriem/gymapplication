import { StyleSheet } from 'react-native';

const loginSignup = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#C1121F",
		alignItems: "center",
		justifyContent: "center",
	}, 
	title: {
		flex: 2.5,
		justifyContent: "center",
	},
	titleText: {
		fontSize: 30,
		color: "#FEF7FF",
		fontFamily: "Poppins-SemiBold",
		paddingTop: "10%",
        textAlign: 'center',
	},
	scrollTitle: {
		paddingTop: "19%",
		paddingBottom: "15%",
	},
    scrollTilteLong: {
        paddingTop: "15%",
        paddingBottom: "7%",
    },
	card: {
		flex: 7.5,
		backgroundColor: "#FEF7FF",
		width: "100%",
		borderTopStartRadius: 65,
		borderTopEndRadius: 65,
		paddingHorizontal: "10%",
		paddingVertical: "12%",
		alignItems: "center",
	},
    SmallPagesCard: {
        paddingVertical: "8%",
    },
	label: {
		alignSelf: "flex-start",
		color: "black",
		fontSize: 16,
		fontFamily: "Poppins-Medium",
		marginBottom: 5,
		marginLeft: 15,
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFACB",
		width: "100%",
		borderRadius: 20,
		paddingHorizontal: 20,
		marginBottom: 15,
	}, 
	input: {
		flex: 1,
		// height: 40,
		color: "#F739AB",
		fontFamily: "Poppins-Medium",
        fontSize: 14,
	},
	lastInput: {
		marginBottom: "16%",
	},
	eyeIcon: {
		width: 30,
		height: 30,
		marginLeft: 10,
		resizeMode: "contain",
	},
	RedLoginSignupButton: {
		backgroundColor: "#C1121F",
		paddingVertical: 5,
		borderRadius: 25,
		width: "65%",
		alignItems: "center",
		marginTop: 10,
	},
	RedLoginSignupButtonText: {
		color: "#fff",
		fontSize: 18,
		fontFamily: "Poppins-SemiBold",
	},
	forgotPassword: {
		color: "black",
		fontSize: 14,
		marginTop: 10,
		fontFamily: "Poppins-Medium",
	},
	PurpleLoginSignupButton: {
		backgroundColor: "#F0DDFA",
		paddingVertical: 5,
		borderRadius: 25,
		width: "65%",
		alignItems: "center",
		marginTop: 20,
		marginBottom: "14%",
	},
	PurpleLoginSignupButtonText: {
		color: "#80539F",
		fontSize: 18,
		fontFamily: "Poppins-SemiBold",
	},
	orText: {
		color: "black",
		fontSize: 14,
		marginTop: 10,
		fontFamily: "LeagueSpartan-Light",
	},
	socialIcons: {
		flexDirection: "row",
		marginTop: 10,
	},
	socialIconSpacing: {
		marginLeft: 20,
	},
	signUpLoginText: {
		color: "black",
		fontSize: 14,
		marginTop: 17,
		fontFamily: "LeagueSpartan-Light",
	},
	signUpLoginLink: {
		color: "#3299FF",
		fontFamily: "LeagueSpartan-Light",
	},
	countryCode: {
		paddingTop: 5,
		marginRight: 0,
        paddingRight: 0,
		width: 0,
	},
	numberContainer: {
		backgroundColor: "transparent",
        paddingVertical: 0,
		paddingLeft: 0,
	},
	phoneSectionContainer: {
		paddingHorizontal: 6,
	},
    agreeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24,
    },
    agreeText: {
        fontFamily: "LeagueSpartan-Regular",
        color: "#4B4544",
        fontSize: 14,
        alignSelf: "flex-start",
        marginRight: 10,
        marginBottom: 7,
    },
    agreeTextBold: {
        fontFamily: "LeagueSpartan-SemiBold",
    },
    datePadding: {
        paddingVertical: 10,
    },
    spaceBetweenInput: {
        marginBottom: 25,
    },
    notice: {
        color: "#F93919",
        fontFamily: "Poppins-Medium",
        fontSize: 13,
    },
    moveToPage: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        flex: 0.9,
    },
    moveToPageButton: {
        width: "40%",
        paddingVertical: 2,
    },
    pageContent: {
        width: "100%",
        flex: 9.1,
    },
    measureInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    measureInputText: {
        flex: 1,
    },
    unit: {
        color: "#F739AB",
        fontSize: 14,
        marginLeft: 8,
    },
    optionPage: {
        paddingHorizontal: "5%",
    },
    optionPageMargin: {
        marginHorizontal: "5%",
    },
    optionPagePadding: {
        paddingHorizontal: "5%",
    },
    optionButton: {
        padding: 15,
        width: "100%",
        borderRadius: 40,
        backgroundColor: '#DDF2FF',
        marginTop: 8,
        borderWidth: 2,
        borderColor: '#DDF2FF',
        marginBottom: 15,
        height: 117,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    selectedOption: {
        borderColor: '#F739AB',
        backgroundColor: '#FFF0F6',
    },
    optionTitle: {
        textAlign: 'center',
        color: '#000',
        fontSize: 22,
        fontFamily: "Poppins-SemiBold",
        alignSelf: 'flex-start',
        marginHorizontal: 10,
    },
    selectedTitle: {
        color: '#F739AB',
    },
    optionDesc: {
        fontSize: 13,
        color: '#A6A09F',
        fontFamily: "Poppins-Medium",
        textAlign: 'left',
        marginLeft: 10,
    },
    selectedDesc: {
        color: '#F739AB',
    },
    helpContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: "5%",
    },
    helpText: {
        fontFamily: "Poppins-Light",
        color: "#F93919",
        marginLeft: 'auto',
        marginRight: 3,
    },
    arrowRight: {
        marginTop: 3,
    },
    timeContainer: {
        backgroundColor: '#FAD3D6',
        borderRadius: 40,
        width: '90%',
        alignSelf: 'center',
        marginTop: 6,
        marginBottom: 30,
    },
    timeLabel: {
        fontSize: 14,
        marginTop: 20,
        color: '#444',
        fontFamily: "Poppins-Medium",
        marginLeft: 25,
    },
    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 10,
    },
    timeInput: {
        borderWidth: 1,
        borderColor: '#E6E0E9',
        borderRadius: 10,
        padding: 10,
        width: 60,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#E6E0E9',
        color: '#000',
    },
    minuteInput: {
        marginRight: 10,
    },
    timeInputFocused: {
        borderColor: '#4B3A8C',
        color: '#4B3A8C',
        backgroundColor: '#FFF',
    },
    colon: {
        fontSize: 24,
        marginHorizontal: 10,
    },
    amPmContainer: {
        marginLeft: 15,
        backgroundColor: '#E6E0E9',
        borderRadius: 10,
        flexDirection: 'row',
    },
    amPmButton: {
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    selectedAmPm: {
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    amPmText: {
        fontWeight: 'bold',
        color: '#000',
    },
    bottomRow: {
        flexDirection: 'row',
        width: '100%',
    },
    cancelButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    cancelSelectedButton: {
        backgroundColor: '#E3B6B9',
    },
    cancelButtonText: {
        color: '#65558F',
        fontFamily: 'Poppins-Medium',
    },
    equipementImage: {
        width: 197,
        height: 375,
        marginTop: 20,
        alignSelf: 'center',
        marginLeft: 40,
    },
    selectButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 35,
        backgroundColor: '#FAD3D6',
        padding: 15,
        borderRadius: 20,
    },
    selectButtonText: {
        fontFamily: "Poppins-Medium",
        fontSize: 16,
        color: '#444',
        textAlign: 'left',
        marginLeft: 5,
    },
    arrowBottom: {
        margin: 5,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        padding: 20,
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        maxHeight: '80%',
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily: 'Poppins-SemiBold',
    },
    modalList: {
        marginBottom: 15,
    },
    modalItem: {
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#F0F0F0',
        marginVertical: 5,
        borderWidth: 2,
        borderColor: '#F0F0F0',
    },
    selectedModalItem: {
        backgroundColor: '#F0DDFA',
        borderColor: '#80539F',
    },
    modalItemText: {
        fontFamily: 'Poppins-Medium',
        color: '#000',
    },
    modalDoneButton: {
        backgroundColor: '#65558F',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalDoneButtonText: {
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
    },      
});

export default loginSignup;