import "./widgetLg.css";

export default function WidgetLg() {
    const Button = ({ type}) => {
        return <button className={"widgetLgButton " + type}>{ type}</button>
    }
    return (
        <div className="widgetLg">
            <span className="widgetLgTitle">Latest Transactions</span>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644_960_720.jpg" 
                            alt="Mulher"  
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Carol Nakamura</span>
                    </td>
                    <td className="widgetLgDate">2 Fab 2022</td>
                    <td className="widgetLgAmount">$200.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644_960_720.jpg" 
                            alt="Mulher"  
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Carol Nakamura</span>
                    </td>
                    <td className="widgetLgDate">2 Fab 2022</td>
                    <td className="widgetLgAmount">$200.00</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644_960_720.jpg" 
                            alt="Mulher"  
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Carol Nakamura</span>
                    </td>
                    <td className="widgetLgDate">2 Fab 2022</td>
                    <td className="widgetLgAmount">$200.00</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644_960_720.jpg" 
                            alt="Mulher"  
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Carol Nakamura</span>
                    </td>
                    <td className="widgetLgDate">2 Fab 2022</td>
                    <td className="widgetLgAmount">$200.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}
