import React from 'react';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

interface TourCardProps {
  onAccept: () => void;
  expectedAmount: string;
  from: string;
  to: string;
  passengerName: string;
  requiredSeats: string;
  passengerPhoneNumber: string;
}

function TourCard({
  onAccept,
  expectedAmount,
  from,
  to,
  passengerName,
  passengerPhoneNumber,
  requiredSeats,
}: TourCardProps) {
  return (
    <Card style={{ backgroundColor: '#FFD428', borderRadius: 20, width: '100%', marginBottom: 10 }}>
      <Card.Content>
        <Title style={{ color: '#808080' }}>{passengerName}</Title>
        <Paragraph style={{ fontWeight: '700' }}>
          TOUR: {from} ➡ {to}
        </Paragraph>
        <Paragraph style={{ fontWeight: '700' }}>SEATS REQUIRED: {requiredSeats}</Paragraph>
        <Paragraph style={{ fontWeight: '700' }}>AMOUNT PAYABLE: Rs {expectedAmount}</Paragraph>
      </Card.Content>
      <Card.Actions style={{ justifyContent: 'flex-end', padding: 0 }}>
        {/* TODO: On tour accept remove it from database */}
        <Button color='#808080' onPress={onAccept} style={{ marginRight: 10 }}>
          Accept
        </Button>
      </Card.Actions>
    </Card>
  );
}

export default TourCard;
