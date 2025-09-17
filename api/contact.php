<?php

/**
 * Set CORS headers for cross-origin requests
 */
function setCorsHeaders() {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type');
}

/**
 * Send JSON error response
 */
function sendErrorResponse($message, $code = 400) {
    http_response_code($code);
    echo json_encode(['error' => $message]);
    exit;
}

/**
 * Validate email format
 */
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Validate phone number (Brazilian format)
 */
function validatePhone($phone) {
    $phoneDigits = preg_replace('/\D/', '', $phone);
    return strlen($phoneDigits) >= 10 && strlen($phoneDigits) <= 11;
}

/**
 * Sanitize input data
 */
function sanitizeInput($data) {
    return [
        'name' => trim($data['name'] ?? ''),
        'phone' => trim($data['phone'] ?? ''),
        'email' => trim($data['email'] ?? ''),
        'message' => trim($data['message'] ?? '')
    ];
}

/**
 * Validate form data
 */
function validateFormData($data) {
    if (empty($data['name']) || empty($data['phone']) || empty($data['email'])) {
        return 'Required fields missing';
    }
    
    if (!validateEmail($data['email'])) {
        return 'Invalid email format';
    }
    
    if (!validatePhone($data['phone'])) {
        return 'Invalid phone number';
    }
    
    return null;
}

/**
 * Log form submission to file
 */
function logSubmission($data) {
    $logData = [
        'name' => $data['name'],
        'phone' => $data['phone'],
        'email' => $data['email'],
        'message' => $data['message'],
        'timestamp' => date('Y-m-d H:i:s'),
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
    ];
    
    $logFile = 'contact_submissions.log';
    $logEntry = date('Y-m-d H:i:s') . " - " . json_encode($logData) . "\n";
    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
    
    return $logData;
}

/**
 * Send success response
 */
function sendSuccessResponse($data) {
    $response = [
        'success' => true,
        'message' => 'Form submitted successfully',
        'data' => [
            'name' => $data['name'],
            'email' => $data['email'],
            'submitted_at' => $data['timestamp']
        ]
    ];
    
    echo json_encode($response);
}

setCorsHeaders();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendErrorResponse('Method not allowed', 405);
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    sendErrorResponse('Invalid JSON data');
}

$formData = sanitizeInput($input);
$validationError = validateFormData($formData);

if ($validationError) {
    sendErrorResponse($validationError);
}

$loggedData = logSubmission($formData);
sendSuccessResponse($loggedData);

?>
