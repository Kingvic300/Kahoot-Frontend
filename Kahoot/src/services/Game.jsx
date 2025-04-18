// import kahootApi from 'kahootApi.jsx';
//
// export const createGame = async (teacherId,quizId,studentsId) => {
//      try {
//           const response = await kahootApi.post('/game/create', {teacherId, studentsId: studentsId, quizId});
//           return response.data;
//      } catch (error) {
//           throw error.response?.data || error.message;
//      }
// };
//
// export const joinGame = async (teacherId, studentId, pin) => {
//      try {
//           const response = await kahootApi.post('/game/join', { teacherId, studentsId: studentId, pin });
//           return response.data;
//      } catch (error) {
//           throw error.response?.data || error.message;
//      }
// };
//
//
// export const startGame = async (teacherId) => {
//      try {
//           const response = await kahootApi.post('/game/start', { teacherId });
//           return response.data;
//      } catch (error) {
//           throw error.response?.data || error.message;
//      }
// };
//
// export const submitAnswer = async (pin, studentsId, quizId, answer) => {
//      try {
//           const response = await kahootApi.post('/game/submit-answer', {
//                pin,
//                studentsId,
//                quizId,
//                answer
//           });
//           return response.data;
//      } catch (error) {
//           throw error.response?.data || error.message;
//      }
// };
//
//
// export const getGameState = async (gamePin) => {
//      try {
//           const response = await kahootApi.get(`/game/current-state?pin=${gamePin}`);
//           return response.data;
//      } catch (error) {
//           throw error.response?.data || error.message;
//      }
// };
//
// export const endGame = async (gamePin) => {
//      try {
//           const response = await kahootApi.post('/game/end-game', { gamePin });
//           return response.data;
//      } catch (error) {
//           throw error.response?.data || error.message;
//      }
// };
//
//
// export const getActiveGames = async () => {
//      try {
//           const response = await kahootApi.get('/game/active');
//           return response.data;
//      } catch (error) {
//           throw error.response?.data || error.message;
//      }
// };
//
// export const getStudentGameHistory = async (studentsId) => {
//      try {
//           const response = await kahootApi.post('/game/history', { studentsId });
//           return response.data;
//      } catch (error) {
//           throw error.response?.data || error.message;
//      }
// };
