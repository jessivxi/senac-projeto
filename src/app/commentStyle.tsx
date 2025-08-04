import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        container: {
        height: '100%',
        justifyContent: 'center',
        padding: 13,
        paddingTop: 30,
        backgroundColor: '#151515',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        width: 80,
        height: 80,
    },

    searchContainer: {
        height: 40,
        width: 315,
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#222222',
        borderRadius: 6,
    },

    searchInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
    },


    searchButton: {
        paddingTop: 2,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    content: {
        flex: 1,
        padding: 28,
        paddingHorizontal: 15,
    },
    backButton: {
        marginBottom: 10,
    },
    backButtonText: {
        color: '#ec701c',
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        color: '#ec701c',
        marginLeft: 5,
        fontSize: 12,
    },
    postTitle: {
        color: '#006AB9',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 13,
        paddingTop: 3,
    },
    postText: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 10,
    },
    bulletTitle: {
        color: '#ec701c',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bulletList: {
        marginBottom: 20,
    },
    bulletItem: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 5,
    },
    commentTitle: {
        color: '#ec701c',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    addComment: {
        color: '#ec701c',
        marginBottom: 10,
    },
    commentCard: {
        backgroundColor: '#222222',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    commentText: {
        color: '#ccc',
        fontSize: 12,
        marginTop: 5,
    },
    moreComments: {
        alignItems: 'center',
        marginVertical: 10,
    },
    moreCommentsText: {
        color: '#ccc',
        fontSize: 12,
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#333',
        backgroundColor: '#222222',
    },
});

export default styles;
