// NotifyCard.tsx
import { useState } from "react";

const NotifyCard = ({ onClose }: { onClose: () => void }) => {
  const handleAllow = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        // Your NotifyVisitors script will take over from here
        onClose();
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
    }
  };

  return (
    <Card className="fixed top-16 right-4 w-80 p-4 bg-white shadow-lg z-50">
      <h3 className="font-semibold mb-3">Enable Notifications</h3>
      <p className="text-sm text-gray-600 mb-4">
        Stay updated with latest alerts and updates
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleAllow}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Allow
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Skip
        </button>
      </div>
    </Card>
  );
};

export default NotifyCard;