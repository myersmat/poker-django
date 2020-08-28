

const room_name = JSON.parse(document.getElementById('room-name').textContent);

const player_id = JSON.parse(document.getElementById('player-id').textContent);

const player_index = JSON.parse(document.getElementById('player-idx').textContent);

const chat_socket = new WebSocket(
    'ws://' +
    window.location.host +
    '/ws/game/' +
    room_name +
    '/'
)

chat_socket.onmessage = function (e) {
    const data = JSON(e.data);
    //Switch on data['type']
    switch (data.action) {
        case 'add_player':
            if (data.player_id != player_id) {
                add_player(data.player_id, data.player_name, data.player_chip_count, data.player_index)
            }
            break;
        case 'remove_player':
            remove_player(data.player_id)
            break;
        case 'update_player_chips':
            update_player_chips(data.player_id, data.chip_count)
            break;
        case 'fold_player':
            //muck cards
            break;
        case 'player_turn':
            //TODO: remove highlight of prior active player (track that globally?)
            if (data.player_id == player_id) {
                //My turn!
                self_turn(data.chips_to_call)
            } else {
                player_turn(data.chips_to_call)
            }
            break;
        case 'add_to_card_bay':
            //add cards to card bay
            //I assume image_resource will be sent with
            break;
        case 'end_hand':
            // Show winning hand (if showdown)
            // muck all other hands
            // Show message like "Player wins $X (Full house)" or whatever
            // Show message for each subsequent pot?
            // Add chips from pot to player
            // clear all cards
            // get list of eliminated players from message
            // If self.player_id is eliminated, offer buyback?
            break;
        default:
            throw ("Error: message type " + data.action + "not understood!")
    }

}

function add_player(player_id, player_name, player_chip_count, new_player_index) {
    //find div containing players
    //insert new div with player info into the parent div
}

function remove_player(player_id) {
    //Find by id
}

function update_player_chips(player_id, chip_count) {
    //find associated element (findByID)
    //find child div by class ("chips")
    //Better yet, have element ID be '[player_id]_chips'
    //update chips
    //if chips == 0, all in or eliminated
}

function fold_player(player_id) {
    //Find player by 'player-[id]-hand
    //clear it (set to hidden would work if not using animations)
}

function player_turn(player_id) {
    //Highlight div of active player
}

function self_turn(chips_to_call) {
    //Make all buttons and money slider active
    //display of chips_to_call
}

function fold_self() {

}

function raise(amount) {

}

function call() {

}