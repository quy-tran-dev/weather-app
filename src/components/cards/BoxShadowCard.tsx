import Card from "./Card";
import CardContent from "./CardContent";

export default function BoxShadowCard() {
    return (
        <Card>
            <CardContent className="p-4 text-center">
                <div className="mx-auto mb-2">🌬️</div>
                <p className="font-medium">Wind</p>
                <p className="text-lg font-semibold">8 km/h</p>
            </CardContent>
        </Card>
    )
}
