import { HubConnectionBuilder, HubConnection } from "@microsoft/signalr";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState, store } from "./configureStore";
import { accountSlice } from "../../features/account/accountSlice";
import { LogLevel } from "@microsoft/signalr/dist/esm/ILogger";

// Set up the SignalR connection
const createConnection = (): ThunkAction<
  void,
  RootState,
  null,
  Action<string>
> => {
  return async (dispatch) => {
    const connection = new HubConnectionBuilder()
      .withUrl("http://localhost:5000/hubs/", {
        accessTokenFactory: () => store.getState().account.user?.token!,
      })
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();

    try {
      await connection.start();
    } catch (err) {
      console.error("error establishing the signalr connection", err);
      return;
    }

    dispatch({
      type: "CREATE_CONNECTION",
      connection,
    });
  };
};
