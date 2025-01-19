export class JsonValidator {
    static safeParseJson(jsonString: string): { 
        success: boolean; 
        data?: any; 
        error?: string;
        partialData?: any;
    } {
        try {
            if (!jsonString || jsonString.trim() === '') {
                return {
                    success: false,
                    error: 'JSON string is empty or undefined'
                };
            }

            // Attempt to parse the JSON
            const parsed = JSON.parse(jsonString);
            return {
                success: true,
                data: parsed
            };
        } catch (error) {
            // Attempt to recover partial data
            const partialData = this.recoverPartialData(jsonString);
            return {
                success: false,
                error: `JSON parsing error: ${(error as Error).message}`,
                partialData: partialData
            };
        }
    }

    private static recoverPartialData(jsonString: string): any {
        try {
            // Try to find the last complete object/array
            const matches = jsonString.match(/({[^}]*}|\[[^\]]*\])/g);
            if (matches && matches.length > 0) {
                const lastComplete = matches[matches.length - 1];
                return JSON.parse(lastComplete);
            }
        } catch {
            // If recovery fails, return null
            return null;
        }
        return null;
    }

    static isValidJson(jsonString: string): boolean {
        try {
            JSON.parse(jsonString);
            return true;
        } catch {
            return false;
        }
    }
}
